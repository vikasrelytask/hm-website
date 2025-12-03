@echo off
setlocal enabledelayedexpansion

:: -----------------------------------------------------------------
:: 1. SET YOUR FOLDERS
:: -----------------------------------------------------------------
REM This is your original folder with all the images and videos.
set "SOURCE_DIR=C:\Users\Ns8pc\Pictures\888\public\projects"

REM This is where the new, compressed files will be saved.
set "OUTPUT_DIR=C:\Users\Ns8pc\Pictures\888\public\projects_compressed"


:: -----------------------------------------------------------------
:: 2. CREATE OUTPUT DIRECTORY
:: -----------------------------------------------------------------
if not exist "%OUTPUT_DIR%" (
    echo Creating output directory at: %OUTPUT_DIR%
    mkdir "%OUTPUT_DIR%"
) else (
    echo Output directory already exists. Files may be overwritten.
)
echo.


:: -----------------------------------------------------------------
:: 3. PROCESS IMAGES (JPG, JPEG, PNG, JFIF)
:: -----------------------------------------------------------------
echo ===================================
echo Starting Image Compression...
echo ===================================
echo.

for /R "%SOURCE_DIR%" %%F in (*.jpg, *.jpeg, *.png, *.jfif, *.JPG, *.JPEG, *.PNG, *.JFIF) do (
    set "FULL_PATH=%%F"
    
    REM Get the relative path to rebuild the directory structure
    set "REL_PATH=!FULL_PATH:%SOURCE_DIR%=!"
    set "OUTPUT_FILE=%OUTPUT_DIR%!REL_PATH!"
    
    REM Create the target directory in the output folder
    if not exist "!OUTPUT_FILE!\.." mkdir "!OUTPUT_FILE!\.."
    
    echo Processing Image: !REL_PATH!
    
    REM Run ImageMagick:
    REM -strip: Removes all metadata (EXIF data, etc.) to save space.
    REM -quality 80: Sets JPEG quality to 80%. A good balance.
    REM -resize "1920x1920>": Resizes images ONLY if they are larger than 1920px (width or height).
    magick "%%F" -strip -quality 80 -resize "1920x1920>" "!OUTPUT_FILE!"
)
echo.


:: -----------------------------------------------------------------
:: 4. PROCESS VIDEOS (MP4)
:: -----------------------------------------------------------------
echo ===================================
echo Starting Video Compression...
echo ===================================
echo.

for /R "%SOURCE_DIR%" %%F in (*.mp4, *.MP4) do (
    set "FULL_PATH=%%F"
    
    REM Get the relative path to rebuild the directory structure
    set "REL_PATH=!FULL_PATH:%SOURCE_DIR%=!"
    set "OUTPUT_FILE=%OUTPUT_DIR%!REL_PATH!"
    
    REM Create the target directory in the output folder
    if not exist "!OUTPUT_FILE!\.." mkdir "!OUTPUT_FILE!\.."
    
    echo Processing Video: !REL_PATH!
    
    REM Run FFmpeg:
    REM -c:v libx264: Uses the standard H.264 video codec.
    REM -crf 26: Constant Rate Factor. 23 is default, 26-28 is a good balance for web.
    REM -preset medium: Good balance of compression speed and file size.
    REM -vf "scale=iw*min(1\, 1920/iw):-2": Scales video to a MAX width of 1920px (if it's wider).
    REM -c:a aac -b:a 128k: Re-encodes audio to 128kbps AAC stereo.
    ffmpeg -i "%%F" -c:v libx264 -crf 26 -preset medium -vf "scale=iw*min(1\, 1920/iw):-2" -c:a aac -b:a 128k "!OUTPUT_FILE!" -y
)
echo.

:: -----------------------------------------------------------------
:: 5. DONE
:: -----------------------------------------------------------------
echo ===================================
echo      COMPRESSION COMPLETE!
echo ===================================
echo All compressed files are in:
echo %OUTPUT_DIR%
echo.
pause