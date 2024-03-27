[
    {
        "chapterNr": 1,
        "subtitle": "Chapter One",
        "title": "What is a Database?",
        "pages": [
            {
                "id": 1,
                "title": "Definition",
                "descriptions": [
                    "A collection of data.",
                    "It's like a Phonebook with lots of names, addresses and phone numbers.",
                    "A method for accessing and manipulating method"
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 2,
        "subtitle": "Chapter Two",
        "title": "What is SQL?",
        "pages": [
            {
                "id": 1,
                "title": "Definition",
                "descriptions": [
                    "A programming language used to interact with databases.",
                    "Understand the importance of selecting the right DBMS for your specific needs."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 3,
        "subtitle": "Chapter Three",
        "title": "SQL Statement Types",
        "pages": [
            {
                "id": 1,
                "title": "DML (Data Manipulation Language)",
                "descriptions": [
                    "SELECT: retrieves data from one or more tables.",
                    "INSERT INTO: add new records into a table.",
                    "UPDATE: modifies existing records in a table.",
                    "DELETE: removes records from a table."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "DDL(Data Definition Language)",
                "descriptions": [
                    "CREATE: creates a new database, table, etc.",
                    "ALTER: modifies an existing database,table, etc.",
                    "DROP: deletes an existing database, table, etc",
                    "TRUNCATE: removes all records from a table, but keeps the structure intact."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 3,
                "title": "DCL (Data Control Language)",
                "descriptions": [
                    "GRANT: provides specific privileges to users or roles.",
                    "REVOKE: removes specific privileges from users or roles."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 4,
        "subtitle": "Chapter Four",
        "title": "Relational Databases",
        "pages": [
            {
                "id": 1,
                "title": "Definition",
                "descriptions": [
                    "A relational database is a structured way of storing and managing data that follows the Relational Model.",
                    "The Relational Model organizes data into Tables, where each table has a set of Columns and Rows.",
                    "Each column representing a specific attribute of field, and each row represents a unique record of data."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "Primary and Foreign key",
                "descriptions": [
                    "PRIMARY KEY constraint uniquely identifies each record in a table and must contain UNIQUE values, and cannot contain NULL values.",
                    "A FOREIGN KEY  is a field on one table, that refers to the PRIMARY KEY in another table. A table can have only one primary key and multiple foreign keys; and in the table, this primary key can consist of single or multiple columns (fields)."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 5,
        "subtitle": "Chapter Five",
        "title": "Relationships between data",
        "pages": [
            {
                "id": 1,
                "title": "Different ways data can be related",
                "descriptions": [
                    "One to one: Where one record from one table is associated with exactly one record from another table.",
                    "One to many: Where one record from one table can be associated with multiple records from another table.",
                    "Many to many: Where each record from one table can be associated with multiple records from another table, and vice versa."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "Examples",
                "descriptions": [
                    "Email account: one to one: phone number",
                    "Book: one to many: reviews.",
                    "Book: many ro many: authors."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 6,
        "subtitle": "Chapter Six",
        "title": "Data Types",
        "pages": [
            {
                "id": 1,
                "title": "Numeric Types",
                "descriptions": [
                    "INT(size): A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295.",
                    "SMALLINT(size) - A small integer. Signed range is from -32768 to 32767. Unsigned range is from 0 to 65535.",
                    "DECIMAL(size, d) - An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "Character String Types",
                "descriptions": [
                    "VARCHAR(0 to 65535): A VARIABLE length string (letters, numbers, and special characters)",
                    "CHAR(0 to 255): A FIXED length string (letters, numbers, and special characters)."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 3,
                "title": "Date and Time Types",
                "descriptions": [
                    "DATE - A date. Format: YYYY-MM-DD.",
                    "TIME - A time. Format: hh:mm:ss.",
                    "DATETIME - A date and time combination. Format: YYYY-MM-DD hh:mm:ss.",
                    "TIMESTAMP - A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 4,
                "title": "Boolean",
                "descriptions": [
                    "True and False values."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 7,
        "subtitle": "Chapter Seven",
        "title": "SQL Essential clauses and wildcards",
        "pages": [
            {
                "id": 1,
                "title": "Essential clauses",
                "descriptions": [
                    "SELECT: Defines which columns to return",
                    "FROM: Specifies the tables from which you want to retrieve data.",
                    "WHERE: Filters the results based on specific conditions",
                    "LIMIT:The LIMIT clause is used to specify the number of records to return."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "Wildcard characters",
                "descriptions": [
                    "A wildcard character is used to substitute one or more characters in a string",
                    "Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.",
                    "* Represents select all the data in the table",
                    "% Represents zero or more characters.",
                    "_ Represents a single character."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 8,
        "subtitle": "Chapter Eight",
        "title": "Logical operators",
        "pages": [
            {
                "id": 1,
                "title": "Essential logicl operator",
                "descriptions": [
                    "AND: combines conditions, requiring all to be true for a record to be selected.",
                    "OR: operator combines conditions, requiring at least one to be true for a record to be selected.",
                    "NOT: negates a condition."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 9,
        "subtitle": "Chapter Nine",
        "title": "Aggregate functions",
        "pages": [
            {
                "id": 1,
                "title": "Essential function",
                "descriptions": [
                    "SUM(): returns the total sum of a numeric column.",
                    "MAX(): returns the largest value of the selected column.",
                    "COUNT(): function returns the number of rows that match a specified criteria.",
                    "AVG(): returns the average of values in a column."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "Essential keyword and statements",
                "descriptions": [
                    "Select Distinct: used to return only different values.",
                    "Order By: used to sort the result-set in ascending or descending order.",
                    "Group By: groups rows that have the same values intro summary rows",
                    "Having clause: used with aggregate functions as WHERE keyword can't be used with aggregate functions."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    },
    {
        "chapterNr": 10,
        "subtitle": "Chapter ten",
        "title": "Join clause",
        "pages": [
            {
                "id": 1,
                "title": "Definition",
                "descriptions": [
                    "An SQL JOIN  clause is used to combine rows from two or more tables, based on a related column between them."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 2,
                "title": "Right Join",
                "descriptions": [
                    "RIGHT JOIN returns all records from the right table (Table B) and the matched records from the left table (Table A)."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 3,
                "title": "Left Join",
                "descriptions": [
                    "LEFT JOIN returns all records from the left table (Table A) and the matched records from the right table (Table B)."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 4,
                "title": "Inner Join",
                "descriptions": [
                    "INNER JOIN returns records that have matching values in both tables."
                ],
                "practice": true,
                "image": "/learn/chapter-one-sections-one"
            },
            {
                "id": 5,
                "title": "Full Join",
                "descriptions": [
                    "FULL JOIN returns all records where there is a match in either left (Table A) or right (Table B) table."
                ],
                "practice": false,
                "image": "/learn/chapter-one-sections-one"
            }
        ]
    }
]