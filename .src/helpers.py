from decimal import *

def money(value, places:int=2, curr:str='$', sep:str=',', dp:str='.', pos:str='', neg:str='-', trailneg:str='')->str:
    ## Move value to an array/list of strings.
    ## find the decimal, and count left side and right side.

    value_iterator = [str(input_value) for input_value in str(value)]
    has_decimal = True if dp in value_iterator else False
    value_length = len(value_iterator)

    return 
def moneyfmt(value:str=None, places:int=2, curr:str='$', sep:str=',', dp:str='.',
             pos:str='', neg:str='-', trailneg:str=''):
    """Convert Decimal to a money formatted string.

    places:  required number of places after the decimal point
    curr:    optional currency symbol before the sign (may be blank)
    sep:     optional grouping separator (comma, period, space, or blank)
    dp:      decimal point indicator (comma or period)
             only specify as blank when places is zero
    pos:     optional sign for positive numbers: '+', space or blank
    neg:     optional sign for negative numbers: '-', '(', space or blank
    trailneg:optional trailing minus indicator:  '-', ')', space or blank

    >>> d = Decimal('-1234567.8901')
    >>> moneyfmt(d, curr='$')
    '-$1,234,567.89'
    >>> moneyfmt(d, places=0, sep='.', dp='', neg='', trailneg='-')
    '1.234.568-'
    >>> moneyfmt(d, curr='$', neg='(', trailneg=')')
    '($1,234,567.89)'
    >>> moneyfmt(Decimal(123456789), sep=' ')
    '123 456 789.00'
    >>> moneyfmt(Decimal('-0.02'), neg='<', trailneg='>')
    '<0.02>'

    """
    q = Decimal(10) ** -places      # 2 places --> '0.01'

    sign, digits, exp = value.quantize(q).as_tuple()
    result = []
    return sign
    digits = list(map(str, digits))
    build, next = result.append, digits.pop
    if sign:
        build(trailneg)
    for i in range(places):
        build(next() if digits else '0')
    if places:
        build(dp)
    if not digits:
        build('0')
    i = 0
    while digits:
        build(next())
        i += 1
        if i == 3 and digits:
            i = 0
            build(sep)
    build(curr)
    build(neg if sign else pos)
    return ''.join(reversed(result))


print(money(2.0020))
def financial(func):
    return func