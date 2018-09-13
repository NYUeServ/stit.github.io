# mydate.py
import random
    
def is_valid_month_num(n):
    if(n >= 1 and n < 13):
        return True
    return False

def month_num_to_string(month_num):
   months = ['January', 'February', 'March', 'April', 'May', 'June',
             'July', 'August', 'September', 'October', 'November', 'December']
   if (is_valid_month_num(month_num)):
       return months[month_num-1]
   return None

def date_to_string(date_list):
    name = month_num_to_string(date_list[1])
    string = "{} {}, {}".format(name, date_list[2], date_list[0])
    return string

def dates_to_strings(date_list):
    new_list = []
    for l in date_list:
        new_list.append(date_to_string(l))
    return new_list

def remove_years(date_list):
    new_list = []
    for l in date_list:
        new_list.append(l[1:])
    return new_list

def is_leap_year(year):
    if (year%4 == 0):
        if (year%100 == 0):
            if (year%400 == 0):
                return True
        else: return True
    return False

def get_num_days_in_month(month_num, year):
    months_to_days = [(1, 31), (2, 28), (3, 31), (4, 30), (5, 31), (6, 30), (7, 31), (8, 31), (9, 30), (10, 31), (11, 30), (12, 31)]
    if ( is_valid_month_num(month_num) ):
        if ( is_leap_year(year) ):
            return months_to_days[month_num-1][1]+1
        return months_to_days[month_num-1][1]
    return None

def generate_date(start_year, end_year):
    date = []
    date.append(random.randint(start_year, end_year))
    
    month = random.randint(1, 12)
    max_days = get_num_days_in_month(month, date[0])

    date.append(month)
    date.append(random.randint(1, max_days))
                
    return date
