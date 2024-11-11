const express  = require('express');
const app =express();
const cors = require('cors');

const PORT  = process.env.PORT ||3000;

app.use(cors({
    origin: 'http://localhost:1841' // Allow only your Ext JS app's origin
}));



const users = [
    { name: "Alice", age: 25, email: "alice@example.com", dob: "1998-01-15", mobile: "123-456-7890", address: "123 Main St, City, Country" },
    { name: "Bob", age: 30, email: "bob@example.com", dob: "1993-03-22", mobile: "234-567-8901", address: "234 Elm St, City, Country" },
    { name: "Charlie", age: 28, email: "charlie@example.com", dob: "1995-05-10", mobile: "345-678-9012", address: "345 Oak St, City, Country" },
    { name: "David", age: 32, email: "david@example.com", dob: "1991-06-18", mobile: "456-789-0123", address: "456 Pine St, City, Country" },
    { name: "Eva", age: 26, email: "eva@example.com", dob: "1997-07-30", mobile: "567-890-1234", address: "567 Maple St, City, Country" },
    { name: "Frank", age: 35, email: "frank@example.com", dob: "1988-08-05", mobile: "678-901-2345", address: "678 Birch St, City, Country" },
    { name: "Grace", age: 29, email: "grace@example.com", dob: "1994-09-11", mobile: "789-012-3456", address: "789 Cedar St, City, Country" },
    { name: "Hannah", age: 27, email: "hannah@example.com", dob: "1996-10-20", mobile: "890-123-4567", address: "890 Spruce St, City, Country" },
    { name: "Ian", age: 31, email: "ian@example.com", dob: "1992-11-15", mobile: "901-234-5678", address: "901 Willow St, City, Country" },
    { name: "Jack", age: 24, email: "jack@example.com", dob: "1999-12-25", mobile: "012-345-6789", address: "012 Ash St, City, Country" },
    { name: "Katie", age: 33, email: "katie@example.com", dob: "1990-02-14", mobile: "123-456-7890", address: "123 Birch St, City, Country" },
    { name: "Leo", age: 34, email: "leo@example.com", dob: "1989-03-19", mobile: "234-567-8901", address: "234 Cherry St, City, Country" },
    { name: "Mia", age: 22, email: "mia@example.com", dob: "2001-04-28", mobile: "345-678-9012", address: "345 Fir St, City, Country" },
    { name: "Noah", age: 36, email: "noah@example.com", dob: "1987-05-15", mobile: "456-789-0123", address: "456 Ginkgo St, City, Country" },
    { name: "Olivia", age: 23, email: "olivia@example.com", dob: "2000-06-10", mobile: "567-890-1234", address: "567 Hawthorn St, City, Country" },
    { name: "Paul", age: 29, email: "paul@example.com", dob: "1994-07-23", mobile: "678-901-2345", address: "678 Linden St, City, Country" },
    { name: "Quinn", age: 26, email: "quinn@example.com", dob: "1997-08-12", mobile: "789-012-3456", address: "789 Magnolia St, City, Country" },
    { name: "Rita", age: 30, email: "rita@example.com", dob: "1993-09-05", mobile: "890-123-4567", address: "890 Palm St, City, Country" },
    { name: "Sam", age: 32, email: "sam@example.com", dob: "1991-10-22", mobile: "901-234-5678", address: "901 Walnut St, City, Country" },
    { name: "Tina", age: 28, email: "tina@example.com", dob: "1995-11-11", mobile: "012-345-6789", address: "012 Yew St, City, Country" }
];


app.get('/api/users',(req,res)=>{
    res.json(users);
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

