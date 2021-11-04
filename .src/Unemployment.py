filing_limits = {
    2021:150_000,
}
def adjusted_gross_income_eligibility(tax_year,adjusted_gross_income):
    return True if adjusted_gross_income < filing_limits.get(tax_year) else False
def american_rescue_plan_eligible(start_date=None,spouse=False,unemployment_insurance_income=0, tax_year=None, end_date=None, instance=None,adjusted_gross_income=0):
    EXLCUDABLE_LIMIT = 10_200
    if adjusted_gross_income_eligibility(*args, **kwargs):
        return False 
    if spouse and instance.filing_form == 'form_1040_NR':
        return False