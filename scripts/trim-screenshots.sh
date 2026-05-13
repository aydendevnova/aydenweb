#!/bin/bash
#
# Trims macOS screenshot padding (transparent shadow + black border) from PNGs.
# Requires ImageMagick: brew install imagemagick
#
# Usage:
#   ./scripts/trim-screenshots.sh <file_or_directory> [fuzz_percent]
#
# Examples:
#   ./scripts/trim-screenshots.sh public/projects/everplast/
#   ./scripts/trim-screenshots.sh public/projects/everplast/world1.png
#   ./scripts/trim-screenshots.sh public/projects/everplast/ 20

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 <file_or_directory> [fuzz_percent]"
  echo "  fuzz_percent: color tolerance for border detection (default: 15)"
  exit 1
fi

TARGET="$1"
FUZZ="${2:-15}"

if ! command -v magick &> /dev/null; then
  echo "Error: ImageMagick not found. Install with: brew install imagemagick"
  exit 1
fi

trim_file() {
  local f="$1"
  local before
  before=$(magick identify -format '%wx%h' "$f")

  magick "$f" -background none -define trim:percent-background=0% -trim +repage -alpha off "$f"
  magick "$f" -bordercolor black -border 1 -fuzz "${FUZZ}%" -trim +repage "$f"

  local after
  after=$(magick identify -format '%wx%h' "$f")

  if [ "$before" = "$after" ]; then
    echo "  $f: ${after} (unchanged)"
  else
    echo "  $f: ${before} → ${after}"
  fi
}

if [ -f "$TARGET" ]; then
  echo "Trimming 1 file (fuzz: ${FUZZ}%)..."
  trim_file "$TARGET"
elif [ -d "$TARGET" ]; then
  files=("$TARGET"/*.png)
  echo "Trimming ${#files[@]} PNGs in $TARGET (fuzz: ${FUZZ}%)..."
  for f in "${files[@]}"; do
    trim_file "$f"
  done
else
  echo "Error: $TARGET is not a file or directory"
  exit 1
fi

echo "Done."
