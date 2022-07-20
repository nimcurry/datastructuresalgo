import re

def anagrams(str1, str2):
    char_map1 = str_prep(str1)
    char_map2 =  str_prep(str2)
    char_map3 = str_prep_using_one_liner(str1)
    char_map4 = str_prep_using_one_liner(str2)
    
    #using the single command
    print(char_map3 == char_map4)
    
    for i in char_map1:
        
        if char_map1[i] != char_map2[i]:
            
            print("not anagrams")
            return False
    print("anagrams")

def str_prep(stra):
    dict_letters = {}
    for i in re.sub('[^\w*]','',stra):
        #print(i)
        if i in dict_letters.keys():
            #print(dict_letters.keys(), i)
            dict_letters[i]= dict_letters[i] + 1 
        else:
             dict_letters[i]= 1
    #print(dict_letters)
    return dict_letters
    

def str_prep_using_one_liner(stra):
    return ''.join(sorted(re.sub('[^\w*]','',stra).lower()))


def main():
    anagrams('hello world!!!!!!', 'WORLD hello\\\\\\')
    #print('hello')

if __name__ == '__main__':
    main()