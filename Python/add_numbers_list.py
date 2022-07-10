class Solution:
    def twoSum(self, nums: list[int], target: int)-> list[int]:
        hashmap = {}
        for i in range(len(nums)):
            print(nums[i],i)
            
            complement = target - nums[i]
            print(complement,target, nums[i])

            if complement in hashmap:
                return [i, hashmap[complement]]
            print(hashmap,nums[i], i)
            hashmap[nums[i]] = i

n=Solution()
print(n.twoSum([2,7,11,15],26))