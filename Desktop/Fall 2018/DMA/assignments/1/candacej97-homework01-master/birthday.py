# birthday.py
import mydate
import collections

run_occurance = int(input("How many times should I run the simulation?\n> "))
birthdays_to_generate = int(input("How many birthdays should I generate per trial?\n> "))

run_count = 0
start_year = 1996
end_year = 2000

probability_info = []

# generate the number of birthdays specified
while (run_count < run_occurance):
    dates_full = []
    dates_counter = 0
    while (dates_counter < birthdays_to_generate):
        dates_full.append(tuple(mydate.generate_date(start_year, end_year)))
        dates_counter+=1
    # remove the years from the dates
    dates = mydate.remove_years(dates_full)

    # find the dates that occur more than once
    duplicate_dates = set()
    unique_dates = []
    dupes = []
    dupes_full = []
    for x in dates:
        if x not in duplicate_dates:
            unique_dates.append(x)
            duplicate_dates.add(x)
        else:
            dupes.append(x)
            dupes_full.append(dates_full[dates.index(x)])
    
    # print trial number, # of dates that occur more than once, and a comma separated list of the duplicate dates, in parentheses
    dupes_formatted = ""
    if (len(dupes) > 0):
        dupes_formatted+="("
        dates_to_str = mydate.dates_to_strings(dupes_full)
        for d in dates_to_str:
            dupes_formatted+=d[:-6]
            if dates_to_str.index(d) == len(dates_to_str)-1:
                dupes_formatted+=")"
                break
            dupes_formatted+=", "
    info = "Trial #{}: {} dates occur more than once. {}".format(run_count+1, len(dupes), dupes_formatted)
    print(info)

    if len(dupes)>0:
        probability_info.append([run_count+1, len(dupes)])

    run_count+=1

probability_findings = f"\n\nResults:\n=====\n\nOut of {run_occurance} trials, {len(probability_info)} had dates that were repeated.\nWe can conclude that you have a {(len(probability_info)/run_occurance)*100}% chance of sharing a birthday with someone if you are in a group of {birthdays_to_generate} people."
print(probability_findings)