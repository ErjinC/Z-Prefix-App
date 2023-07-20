# Z-Prefix-App
Created by Erjin Choi for SDI-17

This app fulfills all functionality outlined by the rubric and stories.

# Rubric
## User Interface
  This app contains all the requested functionality outlined in the stories section of this readme.

## App-Server Communication
  This app communicates with the API correctly, and uses GET, POST, PATCH, and DELETE requests to communicate with the database.

## Server
  This app has GET, PATCH, POST, and DELETE routes.

## DB Interaction (Read & Write)
  The database can perform all the fetch requests the server makes, which encompasses all CRUD operations.

## Authentication
  The app prevents unauthenticated users from seeing the delete and edit buttons, and does not allow them to access the create item page nor the individual inventory page. Authenticated users can see the delete and edit buttons, and can access the create item page and their personal inventory.



# Stories
## 1. As an inventory manager I want to be able to create an account so that I can track my inventory.
  Users can create an account by clicking "Register" in the heading of the website. They must enter their first name, last name, username, and password.

## 2. As an inventory manager I want to be able to log into my account so that I can see my inventory of items.
### - After logging in, the inventory manager should be redirected to their inventory of items.
  After logging in with the credentials created using the account creation feature, inventory managers are redirected to their personal inventory. This personal inventory lists out all the items that user has created.

## 3. As an inventory manager I want to be able to create a new item so that I can share my item details with the world.
### - After the item is created, the inventory manager should be redirected to their inventory of items.
### - An item displays name, description, and quantity.
  Only inventory managers with an account can create items, which is done by clicking on the "Create Item" button in the header. They must fill in the item name, description, and quantity. After creating the item, they are redirected back to their personal inventory page.

## 4. As an inventory manager I want to be able to see a my entire inventory of items.
### - The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.
  Inventory managers can see the inventory of items they have created by clicking on "My Inventory" in the header. In this page, items display the first 100 characters of their description and cuts off the rest with a "..." if it exceeds that length.

## 5. As an inventory manager I want to be able to see any individual item I have added.
### - The full item information should be displayed.
  Inventory managers can click on the "More Details" button to see the item name, quantity, and complete description of the item.

## 6. As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.
### - When the user toggles edit mode, the page remains the same and the fields become editable.
  Only inventory managers who have logged in can edit items, and can do so by clicking on "More Details" and then "Edit Item". Text fields will appear where the data was and will be autopopulated with the current information. After making the appropriate changes, inventory managers can click on "Apply Changes" to finalize their edits. They will be redirected to the details page of the item they updated.

## 7. As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.
### - When the user deletes the item they should be redirected to their inventory of items.
  Only inventory managers who have logged in can delete items, and can do so by clicking on "Delete Item" on the main page list or in their personal inventory list.

## 8. As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.
### - Unauthenticated users should be able to view all items, and any single item.
### - The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.
  Unauthenticated users can see the list of all items on the main page.

## 9. As a visitor, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details.
### - Unauthenticated users should be able to view all items, and any single item.
  Unauthenticated users can access the details page via the main page of any item.

## 10. As an inventory manager I want to be able to view all items created by every inventory manager so that I can browse every item.
### - Unauthenticated users should be able to view all items, and any single item.
  Inventory managers also have access to the full list on the main page