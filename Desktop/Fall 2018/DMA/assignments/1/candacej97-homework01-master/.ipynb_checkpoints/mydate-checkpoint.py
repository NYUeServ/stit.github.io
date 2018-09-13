# mydate.py

# write a bunch of functions to help with creating dates
# create an interactive program that allows you to run the simulation multiple times

    
def is_valid_month_num(n):
    if(n>1 && n<13):
        retun True
    return False

def month_num_to_string(month_num):
   months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[month_num-1]
    
def date_to_string(date_list):
    return f"{month_num_to_string(date_list[1])} {date_list[2]}, {date_list[0]}" 
    
    
'''    
dates_to_strings(date_list)
remove_years(date_list)
is_leap_year(year)
get_num_days_in_month
generate_date(start_year, end_year)'''

result1 = is_valid_month_num(3) 
print(result1) # True
result2 = is_valid_month_num(37) 
print(result2) # False


result1 = month_num_to_string(1) 
print(result1) # 'January'
result2 = month_num_to_string(10) 
print(result2) # 'October'
result3 = month_num_to_string(234) 
print(result3) # None