// src/tests/UserTable.test.js
import { render, screen } from "@testing-library/react";
import UserTable from "../components/UserTable/UserTable";

const mockUsers = [
  { _id: "1", name: "Alice", email: "alice@example.com", age: 28 },
  { _id: "2", name: "Bob", email: "bob@example.com", age: 34 },
];

test("renders user table rows", () => {
  render(<UserTable users={mockUsers} />);
  expect(screen.getByText("Alice")).toBeInTheDocument();
  expect(screen.getByText("bob@example.com")).toBeInTheDocument();
});
