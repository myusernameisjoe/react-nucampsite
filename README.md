# Week 1

header
footer
campsiteslist component that uses the JS array map method to dynamically render multiple campsite card components
campsite card components take data from an array of campsites objects to show all the campsites from the array

# week 2

home page
card for featured campsite, promotion, partner
when viewport is smaller the links and header will collapse and be replaced by navbar toggler button

breaadcrumb links 



 things
- destructuring assignment syntax is a way to unpack properties from objects and arrays into discrete variables



## diffing & reconciliation

- diffing finds difference in snapshot 1 and snapshot 2
- reconciliation apply changes (re-render) to the DOM
- if only one component changes, only that component will re-render

## hooks

- hook into certain react features
- only work inside function components (not class components)
- 2 common hooks (also you can use custom hooks)
    - The useState() hook lets us add local React state to components (can only be called at the top scope of a component (i.e not in a local for loop))
        - input parameter is what value you want to start at (i.e. have a counter start at zero)
        - returns an array of 2 items (destructure)
        - 1st item - current state value you initalized (myCounter) (name)
        - 2nd item - function to use whne you want to update state value (setMyCounter) (setName)
    - useEffect() gives components access to lifecyccle methods