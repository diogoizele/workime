import { ListRenderItem } from "react-native";
export interface TimePickerProps {
  initialHour?: number;
  initialMinute?: number;

  label?: string;

  limitHour?: number;
  limitMinute?: number;
}

export interface HourFlatListProps {
  hour: number;
  is24Hour?: boolean;
  limitHour?: number;

  onHourChange: (hour: number) => void;
}

export interface MinuteFlatListProps {
  minute: number;
  limitMinute?: number;

  onMinuteChange: (minute: number) => void;
}

export type renderItemType = (
  onChangeItem: (n: number) => void,
  selectedHour: number
) => ListRenderItem<number>;
