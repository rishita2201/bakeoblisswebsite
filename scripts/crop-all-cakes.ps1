Add-Type -AssemblyName System.Drawing

$destDir = "C:\Users\ADMIN\bakeoblisswebsite\public\images\cakes"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

function Crop-Image($sourcePath, $cropX, $cropY, $cropW, $cropH, $outputPath) {
    $src = [System.Drawing.Bitmap]::new($sourcePath)
    
    # Boundary check
    if ($cropX + $cropW -gt $src.Width) { $cropW = $src.Width - $cropX }
    if ($cropY + $cropH -gt $src.Height) { $cropH = $src.Height - $cropY }

    $rect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
    $dest = [System.Drawing.Bitmap]::new($cropW, $cropH)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, [System.Drawing.Rectangle]::new(0, 0, $cropW, $cropH), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Save with high quality JPEG
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
    $encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
    $encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    
    $dest.Save($outputPath, $encoder, $encoderParams)
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Output "Saved: $outputPath ($cropW x $cropH)"
}

# Image 1 (Width: 1024, Height: 634, Top offset: 18)
$img1 = 'C:/Users/ADMIN/.gemini/antigravity/brain/bc77d1ed-0f4a-4397-969a-12bc9e2c26d7/.user_uploaded/media_1793894426898_8bd1b02a.jpg'
$w = 254; $h1 = 304; $top1 = 18; $row2Top1 = $top1 + $h1 + 2
Crop-Image $img1 1 $top1 $w $h1 "$destDir\festive-hamper-box.jpg"
Crop-Image $img1 257 $top1 $w $h1 "$destDir\teachers-day-celebration-cake.jpg"
Crop-Image $img1 513 $top1 $w $h1 "$destDir\silver-jubilee-25-cake.jpg"
Crop-Image $img1 769 $top1 $w $h1 "$destDir\spiderman-birthday-cake.jpg"

Crop-Image $img1 1 $row2Top1 $w $h1 "$destDir\girl-with-books-birthday-cake.jpg"
Crop-Image $img1 257 $row2Top1 $w $h1 "$destDir\lavender-floral-40th-cake.jpg"
Crop-Image $img1 513 $row2Top1 $w $h1 "$destDir\couple-silhouette-anniversary-cake.jpg"
Crop-Image $img1 769 $row2Top1 $w $h1 "$destDir\half-birthday-teddy-ladder-cake.jpg"

# Image 2 (Width: 1024, Height: 652, Top offset: 0)
$img2 = 'C:/Users/ADMIN/.gemini/antigravity/brain/bc77d1ed-0f4a-4397-969a-12bc9e2c26d7/.user_uploaded/media_1793894446121_254994be.jpg'
$h2 = 323; $top2 = 0; $row2Top2 = $h2 + 2
Crop-Image $img2 1 $top2 $w $h2 "$destDir\butterfly-pastel-2tier-cake.jpg"
Crop-Image $img2 257 $top2 $w $h2 "$destDir\chocolate-drip-oreo-cake.jpg"
Crop-Image $img2 513 $top2 $w $h2 "$destDir\nautical-sailor-2tier-cake.jpg"
Crop-Image $img2 769 $top2 $w $h2 "$destDir\outer-space-galaxy-cake.jpg"

Crop-Image $img2 1 $row2Top2 $w $h2 "$destDir\gender-reveal-baby-shower-cake.jpg"
Crop-Image $img2 257 $row2Top2 $w $h2 "$destDir\couple-gold-sphere-anniversary-cake.jpg"
Crop-Image $img2 513 $row2Top2 $w $h2 "$destDir\gold-crown-butterfly-2tier-cake.jpg"
Crop-Image $img2 769 $row2Top2 $w $h2 "$destDir\sunflower-yellow-heart-cake.jpg"

# Image 3 (Width: 1024, Height: 646, Top offset: 0)
$img3 = 'C:/Users/ADMIN/.gemini/antigravity/brain/bc77d1ed-0f4a-4397-969a-12bc9e2c26d7/.user_uploaded/media_1793894461243_641d3f7a.jpg'
$h3 = 320; $top3 = 0; $row2Top3 = $h3 + 2
Crop-Image $img3 1 $top3 $w $h3 "$destDir\rose-gold-leaf-2tier-cake.jpg"
Crop-Image $img3 257 $top3 $w $h3 "$destDir\coffee-girl-floral-cake.jpg"
Crop-Image $img3 513 $top3 $w $h3 "$destDir\pastel-pink-blue-ombre-duo.jpg"
Crop-Image $img3 769 $top3 $w $h3 "$destDir\rainbow-pastel-balloons-cake.jpg"

Crop-Image $img3 1 $row2Top3 $w $h3 "$destDir\luxury-car-40th-birthday-cake.jpg"
Crop-Image $img3 257 $row2Top3 $w $h3 "$destDir\butterflies-pink-ombre-cake.jpg"
Crop-Image $img3 513 $row2Top3 $w $h3 "$destDir\football-soccer-player-cake.jpg"
Crop-Image $img3 769 $row2Top3 $w $h3 "$destDir\peach-rosette-piping-cake.jpg"

# Image 4 (Width: 1024, Height: 660, Top offset: 0)
$img4 = 'C:/Users/ADMIN/.gemini/antigravity/brain/bc77d1ed-0f4a-4397-969a-12bc9e2c26d7/.user_uploaded/media_1793894489996_6e509694.jpg'
$h4 = 327; $top4 = 0; $row2Top4 = $h4 + 2
Crop-Image $img4 1 $top4 $w $h4 "$destDir\fudge-brownie-lotus-cake.jpg"
Crop-Image $img4 257 $top4 $w $h4 "$destDir\navy-gold-leaf-birthday-cake.jpg"
Crop-Image $img4 513 $top4 $w $h4 "$destDir\pink-rainbow-cloud-cake.jpg"
Crop-Image $img4 769 $top4 $w $h4 "$destDir\royal-wedding-gold-leaf-2tier.jpg"

Crop-Image $img4 1 $row2Top4 $w $h4 "$destDir\baby-shower-carriage-2tier-cake.jpg"
Crop-Image $img4 257 $row2Top4 $w $h4 "$destDir\ballerina-rainbow-birthday-cake.jpg"
Crop-Image $img4 513 $row2Top4 $w $h4 "$destDir\hot-air-balloon-rainbow-cake.jpg"
Crop-Image $img4 769 $row2Top4 $w $h4 "$destDir\floating-illusion-engagement-cake.jpg"

Write-Output "Successfully cropped all 32 authentic cake images!"
