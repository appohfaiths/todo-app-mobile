# Simple Todo App

This is a simple Todo app built with React Native CLI. It allows you to manage your tasks by providing functionality to add, edit, toggle completion, and delete todos.

## Features

- Add new todos by entering a task description
- Edit existing todos to update the task description
- Toggle completion status of todos to mark them as completed or active
- Delete unwanted todos to remove them from the list
- Stores todos to device

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

   for iOS, cd ios

   ```bash
   pod install

   ```

## Usage

1. Start the app

   ```bash
   npm start

   ```

2. Run the app on a connected emulator or device:

   ```bash
   npm run-android
   ```

   ```bash
   npm run-ios

   ```

3. The app will launch on the emulator/device, and you will see the list of todos.
4. To add a new todo, enter some text in the input field and hit enter on your keyboard click on the "+" button.
5. To edit a todo, click on the pen icon to the right of the todo item you wish to edit. Update the text and press Enter or touch anywhere outside the input.
6. To toggle the completion status of a todo, click on the checkbox icon to the left of the todo item. The status will be updated accordingly.
7. To delete a todo, click on the trash icon ti the the right of the todo item. The todo will be removed from the list.

## Acknowledgements

The Todo App was built with the help of various open-source libraries and resources. I would like to acknowledge and express my gratitude to the following:

- [React Native](https://reactnative.dev/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons/blob/master/FONTAWESOME5.md)
- [React-Native-uuid](https://github.com/eugenehp/react-native-uuid#readme)
