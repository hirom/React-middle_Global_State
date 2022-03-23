import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "hirom",
  image: "https://source.unsplash.com/oU6KZTXhuvk",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テストカンパニー"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
