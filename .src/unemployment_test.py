filing_limits = {
    2021:150_000
}
def test_american_rescue_plan(start_date=None,unemployment_insurance_income=0, tax_year=None, end_date=None, instance=None,adjusted_gross_income=0):
    limit = 10_200

     1040-NR
    if adjusted_gross_income > filing_limits.get(tax_year):
        unemployment_insurance_income 
def test_adjusted_gross_income_eligibility(tax_year,adjusted_gross_income):
    if adjusted_gross_income < filing_limits.get(tax_year):
        return True
    else:
        False

print(test_adjusted_gross_income_eligibility(2021,80_000))