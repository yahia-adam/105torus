#!/usr/bin/env node

/*
** EPITECH PROJECT, 2021
** B-MAT-100-PAR-1-1-105torus-anatole.babin
** File description:
** handling_error.js
*/

function handling_error(argv, argc)
{
    if (argv[2] != '1' && argv[2] != '2' && argv[2] != '3')
        return(84);
    if (argc != 9)
        return (84);
    if (parseFloat(argv[8]) > 15)
        return (84);
    return (0);
}

module.exports = { handling_error };