import{test,expect} from '@playwright/test'

test.describe("group1",async () => {
    test("test 1",async () => {
        console.log("test 1  started")
        
    })
     test("test 2",async () => {
        console.log("test 2 started")
        
    })
     test("test 3",async () => {
        console.log("test 3 started")
        
    })
})
test.describe("group2",async () => {
      test("test 4",async () => {
        console.log("test 4 started")
        
    })
     test("test 5",async () => {
        console.log("test 5started")
        
    })
})