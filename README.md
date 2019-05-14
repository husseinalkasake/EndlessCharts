Album Chart Mobile Application

**Note:** This project is a work in progress.


The purpose of this project is to build a music album chart/list creating mobile application. The project is inspired by popular chart rendering tools such as Neverending Charts which allow users to create drag and drop charts of their favorite albums and movies. It is currently being built for Android and will allow users to search and favorite albums as well as adding them to their own shareable drag and drop lists.

Before starting on the application, alot of time was spent exploring different options. While doing it natively would've been the best option in terms of performance, I was interested in exploring existing cross-platform development options considering my previous experience with Xamarin. I eventually decided to use React Native due to how much I enjoy working with ReactJS. One runner up option, Flutter was very interesting to me due to their approach to rendering components and their Dart language, but it was still very new and lacked in terms of support and community despite their excellent documentation.

The application uses the Last.fm public API to fetch album information. In terms of third-party libraries used, the NativeBase component library was used to provide consistent, reusable basic components. Other ones include Redux for state management, React Router for navigation and Axios to handle REST API calls.
