<?php
    $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
    $txt = "Hi, I am Jainil Shah Roll no- 49 from batch B3 and currently pursuing MCA from MPSTME\n";
    fwrite($myfile, $txt);
    // $txt = "Jane Doe\n";
    fclose($myfile);
?>