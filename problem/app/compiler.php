<?php
$couin=$_POST['cusin'];
$language = strtolower($_POST['language']);
$code = $_POST['code'];

$random = substr(md5(mt_rand()), 0, 7);
if ($language == "java") {
    $filePath = "temp/main.java";
    $filePathcusin = "temp/main.txt";

} else {
    $filePathcusin = "temp/" . $random .".txt";

    $filePath = "temp/" . $random . "." . $language;
}
$programFile = fopen($filePath, "w");
$programFilecusin = fopen($filePathcusin, "w");

fwrite($programFile, $code);
fclose($programFile);
fwrite($programFilecusin, $couin);
//
if ($language == "php") {
    $output = shell_exec("C:\wamp64\bin\php\php5.6.40\php.exe $filePath 2>&1 < $filePathcusin");
    echo $output;
}
if ($language == "python") {
    $output= shell_exec("python $filePath 2>&1 < $filePathcusin");
   // $output =shell_exec($couin);
    echo $output;
}

if ($language == "c") {
    $outputExe = $random . ".exe";
    shell_exec("gcc $filePath -o $outputExe");
    $output = shell_exec(__DIR__ . "//$outputExe < $filePathcusin");
    echo $output;
}
if ($language == "cpp") {
    $outputExe = $random . ".exe";
    shell_exec("g++ $filePath -o $outputExe");
    $output = shell_exec(__DIR__ . "//$outputExe < $filePathcusin");
    echo $output;
}
if ($language == "java") {
    $output = shell_exec("java $filePath < $filePathcusin");
    echo $output;
}
fclose($programFilecusin);