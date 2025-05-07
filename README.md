# Lab 5 - Starter
expose.html:  https://fleazhang.github.io/Lab5_Starter/expose.html
explore.html: https://fleazhang.github.io/Lab5_Starter/explore.html

Check your understanding: 

1. No, I would not use a unit test to test the "message" feature of a messaging application. Unit tests are defined to debug independently on a smaller scale. Message features often require two parties and requires testing between at least two individual components. Since unit testing is not able to do so, I would not use a unit test to test the "message" feature.
2. Yes, I would use a unit test to test the "max message length" feature of a messaging application. Since it's an independent component that likely won't affect other non-related unit tests. Additionally, implementing unit tests for these will be quick and allow for me to debug on a smaller scale.