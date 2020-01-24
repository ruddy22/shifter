# shifter

Test task for Wonderobe

## Short text of the task

Implement a program that allows shift operations on an array. During the shift,
the addition of adjacent elements occurs if they are equal.

## Usage

The program interface supports the `--help` option, which displays a brief help text:

``` shell
> node index.js --help
```

or shortcut:

``` shell
> node index.js -h
```

## Possible option list:

* `-h | --help` - displays a short help text
* `-n | --input=1,2,4` - user input. an array of data represented like a string
   with a separator. *Attention!* 0 in this case is not considered a power of 2.
   Example: 1,2,4
* `-i | --interactive` - interactive mode of the program in which the program
  interacts with the user. If option is not used, program will use automatic
  mode in which array processing occurs without user intervention.
* `-z | --with_zeros` - the option includes the addition of array 0 after the shift, i.e. array length does not change
* `-s | --separator=','` - option defines a delimiter for user input
            
## Possible Errors: 

1. `Empty input` - an empty string has been transmitted or the value is missing
2. `Input is too small` - in user input the number of elements is less than 2
3. `Could not find separator into the input` - an invalid line delimiter was sent or the delimiter is missing from the line
4. `Found specific char` - sinput contains "special" characters
5. `Some char into the input is not a number` - the input contains data other than numbers
6. `Some number into the input not a power of 2` - the input contains numbers that are not a power of 2
7. `Some number into the input is 0` - input contains 0
