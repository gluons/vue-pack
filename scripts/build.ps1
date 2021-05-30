$currentPath = Get-Location
$packageRootPath = Resolve-Path 'packages/@gluons'

$packageBuildSequence = @(
	'types',
	'dev',
	'load-config',
	'vue-pack',
	'plugin-banner',
	'plugin-copy',
	'plugin-splitchunks',
	'cli'
)

$packageBuildSequence | ForEach-Object {
	$packagePath = Join-Path -Path $packageRootPath -ChildPath $_

	Set-Location $packagePath

	yarn build
}

Set-Location $currentPath # Go back to original location
