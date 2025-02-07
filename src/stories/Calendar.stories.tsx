import React, { useState } from "react";
import { Calendar } from "@/components/General/Calendar/Calendar";
import type { Meta, StoryFn } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "General/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Calendar> = (args) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className="space-y-4">
      <Calendar {...args} onDateSelect={(date) => setSelectedDate(date)} />
      {selectedDate && (
        <div className="text-gray-800">
          Selected Date: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
