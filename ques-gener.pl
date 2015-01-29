#!/usr/bin/env perl

use Text::Trim qw(trim);

# generate question based on ques.txt

# Read ques txt
my @config = [1,2,3,4,5,6,7,8,9,10];

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
