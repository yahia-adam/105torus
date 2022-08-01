#!/usr/bin/env node
/*
** EPITECH PROJECT, 2021
** B-MAT-100-PAR-1-1-105torus-anatole.babin
** File description:
** usage.js
*/

function usage()
{
    console.log("USAGE");
    console.log("./torus opt a0 a1 a2 a3 a4 n\n")
    console.log("DESCRIPTION");
    console.log("    opt\t\tmethod option:");
    console.log("\t\t\t1 for the bisection method");
    console.log("\t\t\t2 for Newton's method");
    console.log("\t\t\t3 for the secant method");
    console.log("    a[0-4]\tcoefficients of the equation");
    console.log("    n\t\tprecision (the application of the polynomial to the solution should ");
    console.log("\t\tbe smaller than 10^-n)");
}

module.exports = { usage };