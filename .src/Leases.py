
def interstRate(rate):
    return rate/100
def future_value_single_sum(interest_rate, number_of_periods):
    return pow(1+interstRate(interest_rate), number_of_periods)


