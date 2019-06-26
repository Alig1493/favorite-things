### Time spent on coding and scope for improvements
This project was done over the span of two weekends, most of which were spent for study purposes of 
mostly the vue.js library.

Some of the things that I'd have liked to do 
better if I had more time are:
1. For front end:
    * Dockerized the application for better management
    * Handling the success and failure requests and redirects
    (at the moment both success and failure responses redirect
    to the default landing page.)
    * Use a base URL namespace to avoid changing request
    URLs in every single component file
    * Code for testing
    * CI/CD Implementations
    * Handling present warnings and errors better.

2. For back end:
    * More tests
    * CI/CD implementations
    * Keeping a cleaner requirements file 
    (since I used a cookie cutter project to do the backend work
    it might have a lot of packages in the requirements file
    that we did not end up using.)
    * use [djang-dirty-fields](https://github.com/romgar/django-dirtyfields)
      to track my model field changes instead of my custom `ModelDiffMixin`

### Useful feature added on the latest version of the chosen language
My main strengths and experience in this project was in python.
I have used python3.7 at my work and have found dataclasses to be 
really useful. In short I had to make sure the data that were 
being imported from an external service were of the right type.
I simply had to make a small dataclass to parse the payloads, having 
declared strictly type variables in the classes.
A small general snippet: 
```python
@dataclass
class Price:
    price_type: str
    price: float
    valid_from: timezone.datetime
    valid_to: timezone.datetime
```
Having the dataclass construct methods like ``__init__()`` allows 
me to concentrate on making my custom functionality.

### Performance issue in production
* For Django based projects, we usually integrate the project
(running in both local and in production) to sentry, which is a tool
for us to get a more insightful information regarding our projects
that are facing errors. This is especially useful when we're unable 
to gather much data regarding the error itself from the docker logs, on
which our application runs. I've had to debug problems in production 
using such methods only a handful of times. It's usually taken care
of by a senior in most cases.
* Not much knowledge regarding Vue.js.

