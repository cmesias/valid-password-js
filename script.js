
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must: 
//  - be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
// Otherwise: false

// isValidPassword('88Fjjlnms', 'dogLuvr'); // true

// isValidPassword('dogLuvr123!' 'dogLuvr'); // false

function isValidPassword (password, username)
{
    // Ensure password length is at least 8 characters
    if (password.length >= 8)
    {
        // Check if there are spaces
        let hasSpaces = password.includes(' ');

        // Continue if password does not contain spaces
        if (!hasSpaces)
        {
            // Check if password contains username
            let hasUsernameInPassword = password.includes(username);

            // Continue if password does not contain username
            if (!hasUsernameInPassword) {
                return true;
            } 
            
            // Password contains username, return false
            else {
                return false;
            }

        } 
        
        // Password contains spaces, return false
        else {
            return false;
        }
    } 
    
    // Password less than 8, return false
    else {
        return false;
    }
}