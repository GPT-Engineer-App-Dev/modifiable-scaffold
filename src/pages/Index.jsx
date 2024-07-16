import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const App = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>My App</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              placeholder="Add an item"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleAddItem}>Add</Button>
          </div>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="bg-white p-2 rounded shadow">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            Total items: {items.length}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;