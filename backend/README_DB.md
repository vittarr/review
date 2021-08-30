###### --------------------------------------------- ######
#
#  Please explaine here the structure of the database
#
###### --------------------------------------------- ######

places
- ID*
- address
- phone
- description
- image


codes
- ID*
- type
- message
- placeID*


reviews
- ID*
- review
- comment
- codeID*


reviewers
- ID*
- phone
- reviewID*
