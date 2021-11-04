def complete_box_1 (*args, **kwargs):
    """ unemployment compensation"""
    ...
def complete_box_2 (*args, **kwargs):
    """  d """
    ...
def complete_box_3 (*args, **kwargs):
    """  d """
    ...
def complete_box_4 (*args, **kwargs):
    """  d """
    ...
def complete_box_5 (*args, **kwargs):
    """  d """
    ...
def complete_box_6 (*args, **kwargs):
    """  d """
    ...
def complete_box_7 (*args, **kwargs):
    """  d """
    ...
def complete_box_8 (*args, **kwargs):
    """  d """
    ...
def complete_box_9 (*args, **kwargs):
    """  d """
    ...
def complete_box_10 (*args, **kwargs):
    """  d """
    ...
def complete_box_11 (*args, **kwargs):
    """  d """
    ...
class TaxPayer:
    def __init__(self, first_name,
middle_name,
last_name,
street_1,
street_2,
city,
address_state,
zip_code,
telephone_number,
payers_tax_identification_number,
recipients_tax_identification_number,):
        first_name = first_name
        middle_name = middle_name
        last_name = last_name
        street_1 = street_1
        street_2 = street_2
        city = city
        address_state = address_state
        zip_code = zip_code
        telephone_number = telephone_number
        payers_tax_identification_number = payers_tax_identification_number
        recipients_tax_identification_number = recipients_tax_identification_number
    def certain_governemnt_payments(self):
        ...
steve = {
    "first_name" :"stephen",
"middle_name" :"jerome",
"last_name" :"smith",
"street_1" :"4417 Oakwood Dr Apt. 1115",
"street_2" :"",
"city" :"chattanooga",
"address_state" :"TN",
"zip_code" :"37416",
"telephone_number" :"123.456.7890",
"payers_tax_identification_number" :"123.45.7896",
"recipients_tax_identification_number" :"123.45.9876",
}
instance = TaxPayer(**steve)

print(instance)
print(complete_box_1(instance))