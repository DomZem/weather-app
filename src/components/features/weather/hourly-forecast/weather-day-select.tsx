import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import dayjs from 'dayjs';
import { useMemo } from 'react';

export const WeatherDaySelect = ({
  selectedDate,
  onDateChange,
}: {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}) => {
  // Generate the next 7 days starting from today
  const dateOptions = useMemo(() => {
    const today = dayjs();

    return Array.from({ length: 7 }, (_, index) => {
      const date = today.add(index, 'day');

      return {
        value: date.format('YYYY-MM-DD'),
        label: index === 0 ? 'Today' : date.format('dddd'),
        date: date.toDate(),
      };
    });
  }, []);

  const selectedValue = dayjs(selectedDate).format('YYYY-MM-DD');

  const handleValueChange = (value: string) => {
    const selectedOption = dateOptions.find((option) => option.value === value);

    if (selectedOption) {
      onDateChange(selectedOption.date);
    }
  };

  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Day" />
      </SelectTrigger>

      <SelectContent>
        {dateOptions.map((option) => (
          <SelectItem value={option.value} key={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
