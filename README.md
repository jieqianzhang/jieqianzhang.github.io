# jieqianzhang.github.io

# HOW TO USE THE TEMPLATE: 
	
 1.Have 3 data files ready  

  IMPORTANT! Make sure the orders of the names are same in both candidates.csv, matrix.json and rank.json  
  -candidates.csv  
  1st column – candidates’ names   
  2nd column – color assigned for each candidate   

  -matrix.json 
  Depending on how many candidates there are, the size of the matrix should be (number of candidates)* (number of candidates)  
       A    B    C   
   A   x1   x2  x3  
   B   y1   y2  y3  
   C   z1   z2  z3   
   To understand the data:    
   For example, x2 means how much percentage of the people who search for candidate A also search for candidate B. y1 means how much percentage of the people who search for candidate B also search for candidate A.   


  -rank.json  
  IMPORTANT! Remember to transpose the data for rank.json  
     A B C D E F  
  A [0,2,2,2,2,2],  
  B [3,0,3,3,1,3],  
  C [4,4,0,3,5,5],  
  D [5,4,4,0,4,4],  
  E [1,1,1,1,0,1],  
  F [2,3,4,3,3,0]  

  To understand the data:   
  For example, the first column is the ranking of all candidates if you hover over Candidate A.   

# 2.Things to change for future use   
   -  Line 220: change the “5” in for (x = 0; x <= 5; x ++ ){ to the number of (number of candidates - 1)   
   - Line 240: change the “5” in for (y = 0; y <= 5; y ++ ){ to the number of (number of candidates - 1)   
