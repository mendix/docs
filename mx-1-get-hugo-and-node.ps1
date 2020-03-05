$hugoUrl = "https://github.com/gohugoio/hugo/releases/download/v0.31.1/hugo_0.31.1_Windows-64bit.zip"
$nodeUrl = "https://nodejs.org/dist/v8.9.4/node-v8.9.4-win-x64.zip"
$nodeFolder = "node-v8.9.4-win-x64"

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
function Download-File {
	param(
		[string]$url,
		[string]$output
	)

	Write-Output $url

	$wc = New-Object net.webclient
	$wc.Downloadfile($url, $output)
}

New-Item -Name "bin" -ItemType "directory"

$binPath = Resolve-Path -Path "bin"

$hugoDownloadPath = Join-Path -path $binPath -childpath "hugo.zip"
$nodeDownloadPath = Join-Path -path $binPath -childpath "node.zip"

Download-File $hugoUrl $hugoDownloadPath
Download-File $nodeUrl $nodeDownloadPath

# extract hugo
Expand-Archive -LiteralPath $hugoDownloadPath -DestinationPath (Join-Path -path $binPath -childpath "hugo")

# extract node
Expand-Archive -LiteralPath $nodeDownloadPath -DestinationPath $binPath
Rename-Item -Path (Join-Path -path $binPath -childpath $nodeFolder) -NewName "node"

Write-Output "Done!"