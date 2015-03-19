#!/usr/bin/env perl

use Text::Trim qw(trim);
use Test::Simple;

# Read ques txt

my @arr;
my $txt = "./ques.txt";
my $regex = "(.*\\? )(.*)";
open my $txtfp, "<", $txt or die $!;
foreach my $line (<$txtfp>) {
    chomp $line;
    if ($line =~ /$regex/) {
        my $q = trim (substr $1, 5);
        my $c = trim $2;
        my @qc = ($q, $c);
        push @arr, [@qc];
    }
}
close $txtfp;


# Prepare testing
my $utf_str = quotemeta '<meta charset="UTF-8">';

# Test 5 ques html
my $five = "./index.html";
open my $fvfp, "<", $five or die $!;
my $fv_str = join("", <$fvfp>);
my $fv_ct = 0;
my $fv_comment = 0;
# utf-8 encoding test

my $u_c = () = $fv_str =~ /$utf_str/g;
ok($u_c == 1, "Five page - UTF-8 test.");
foreach my $tp (@arr) {
    my @qc = @{$tp};
    my $reg = quotemeta $qc[0];
    my $c = () = $fv_str =~ /$reg/g;
    my $reg2 = quotemeta $qc[1];
    my $d = () = $fv_str =~ /$reg2/g;
    $fv_ct = $fv_ct + $c;
    $fv_comment = $fv_comment + $d;
}
close $fvfp;
ok($fv_ct == 10, "Five page - Question text test.");
ok($fv_comment = 5, "Five page - Comment text test.");

# Test 10 ques html
my $ten = "./index-10.html";
open my $tfp, "<", $ten or die $!;
my $t_str = join("", <$tfp>);
my $u_c_t = () = $t_str =~ /$utf_str/g;
ok($u_c_t == 1, "Ten page - UTF-8 test.");

my $t_ct = 0;
my $t_comment = 0;
foreach my $tp (@arr) {
    my @qc = @{$tp};
    my $reg = quotemeta $qc[0];
    my $c = () = $t_str =~ /$reg/g;
    my $reg2 = quotemeta $qc[1];
    my $d = () = $t_str =~ /$reg2/g;
    $t_ct = $t_ct + $c;
    $t_comment = $t_comment + $d;
}
close $tfp;
ok($t_ct == 20, "Ten page - Question text test.");
ok($t_comment = 10, "Ten page - Comment text test.");
