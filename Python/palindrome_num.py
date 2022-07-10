from operator import truediv


class Solution:
    def isPalindrome(self, x: int) -> bool:
        y = 0
        temp=x
        while x > 0:
            r=x%10
            y = y*10 + r
            x=x//10           
        if temp==y:
            return True

n = Solution()
print(n.isPalindrome(121))

