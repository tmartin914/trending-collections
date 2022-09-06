Running the App
Run 'yarn install' & 'yarn run' from the root directory and go to http://localhost:3000/


Technical Question

For user authentication, I would use a database to to validate username-password combiantions. Before deciding whether the DB should be relational vs non-relational I would like to know more about the specific requirements of the system, and any expected future modifications. There are trade-offs with each option. With a relational DB, we are much more structured and tend to do better with security and data compliance. If we are confident that are schemas will rarely change, and we won't need to scale this may be a good choice. If we have simple queries, and want fast query speed, as well as be able to more easily scale - then a non-relational DB is likely what we want to use. If I could not get any other questions answered, I would go with a relational DB because I would think our focus would be security & reliability and would not expect the schema to change much over time. At a minimum the schema would contain a table with a username & a password hash, but depending on security requirements may contain more fields and more tables.

Designing the API would be even more difficult without having more information on what the system needs to do. Without having more info, the safest choice to me seems like a REST API. REST APIs are flexible, efficient, and highly scalable. If we need to focus more on security, then maybe a SOAP API would be the best choice. If we need to handle thousands of request per seconds, I think REST would be the better option.

To handle 1000s of request per second, I would want to implement a load balancer to distribute the requests across various servers. If the same requests are being frequently made by the clients, I would want to implement a caching server to speed up response time and reduce processing power. 

To handle real time updates to clients as new data is available I would prefer to use a non-relational DB like Firebase where the client can easily subscribe to data updates. It does not need to be specifically Firebase (that's just the one I have experience with for a similar use-case), we just want to use a technology that supports data listeners to pick up on any data changes that the client cares about.