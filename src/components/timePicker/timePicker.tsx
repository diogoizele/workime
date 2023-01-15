import { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Modal, Portal } from "react-native-paper";
import { FlatList, TextInput } from "react-native-gesture-handler";

import {
  Container,
  TimeField,
  Label,
  FieldContainer,
  styles,
  TimePickerPressable,
  TimePickerText,
  SwipeableContainer,
  StyledGestureHandlerRootView,
  StyledTouchableWithoutFeedback,
  TimeTextInput,
} from "./timePicker.styles";
import {
  HourFlatListProps,
  MinuteFlatListProps,
  TimePickerProps,
  renderItemType,
} from "./timePicker.types";

export const TimePicker = ({
  initialHour = 6,
  initialMinute = 0,
  label,
  limitHour = 24,
  limitMinute = 60,
}: TimePickerProps) => {
  const [hours, setHours] = useState(initialHour);
  const [minutes, setMinutes] = useState(initialMinute);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const textMinuteRef = useRef<TextInput>(null);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleTypeFormatHour = (hour: string) => {
    const getHourNumber = () => {
      const number = Number(hour);

      if (isNaN(number)) {
        return 0;
      }

      if (number > limitHour - 1) {
        return limitHour - 1;
      }

      return number;
    };

    const hourNumber = getHourNumber();

    if (hourNumber > 2 || String(hourNumber).length > 1) {
      textMinuteRef?.current?.focus();
    }

    setHours(hourNumber);
  };

  const handleTypeFormatMinute = (minute: string) => {
    const getMinuteNumber = () => {
      const number = Number(minute);

      if (isNaN(number)) {
        return 0;
      }

      if (number > limitMinute - 1) {
        return limitMinute - 1;
      }

      return number;
    };

    const minuteNumber = getMinuteNumber();

    setMinutes(minuteNumber);
  };

  return (
    <>
      <Container>
        <Label>{label}</Label>
        <Shadow distance={2} style={{ borderRadius: 8 }}>
          <FieldContainer activeOpacity={0.8} onPress={handleOpenModal}>
            <TimeField>
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}
            </TimeField>
          </FieldContainer>
        </Shadow>
      </Container>
      <Portal>
        <Modal
          visible={modalIsOpen}
          contentContainerStyle={styles.modal}
          onDismiss={handleCloseModal}
        >
          <StyledGestureHandlerRootView>
            <StyledTouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <SwipeableContainer>
                <HoursFlatList
                  hour={hours}
                  limitHour={limitHour}
                  onHourChange={setHours}
                />
                <TimePickerText isSelectedHour={false}>:</TimePickerText>
                <MinutesFlatList
                  limitMinute={limitMinute}
                  minute={minutes}
                  onMinuteChange={setMinutes}
                />
              </SwipeableContainer>
              <SwipeableContainer>
                <Shadow distance={2} style={styles.shadowInput}>
                  <TimeTextInput
                    value={String(hours).padStart(2, "0")}
                    onChangeText={handleTypeFormatHour}
                  />
                  <TimeField>:</TimeField>
                  <TimeTextInput
                    value={String(minutes).padStart(2, "0")}
                    ref={textMinuteRef}
                    onChangeText={handleTypeFormatMinute}
                  />
                </Shadow>
              </SwipeableContainer>
            </StyledTouchableWithoutFeedback>
          </StyledGestureHandlerRootView>
        </Modal>
      </Portal>
    </>
  );
};

const HoursFlatList = ({
  is24Hour = true,
  hour,
  limitHour,
  onHourChange,
}: HourFlatListProps) => {
  const NUMBER_OF_HOURS = () => {
    if (limitHour) return limitHour;

    return is24Hour ? 24 : 12;
  };
  const hours = Array.from({ length: NUMBER_OF_HOURS() }, (_, index) => index);

  const flatListRef = useRef<FlatList<number>>(null);

  const handleChangeHour = (item: number) => {
    onHourChange(item);

    flatListRef.current?.scrollToIndex({
      index: item,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const handleScrollToIndexFailed = ({ index }: { index: number }) => {
    setTimeout(
      () =>
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        }),
      100
    );
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: hour,
      animated: true,
      viewPosition: 0.5,
    });
  }, [hour]);

  return (
    <>
      <FlatList
        data={hours}
        ref={flatListRef}
        contentContainerStyle={styles.timeSelectContent}
        renderItem={renderItem(handleChangeHour, hour)}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onScrollToIndexFailed={handleScrollToIndexFailed}
      />
    </>
  );
};

const MinutesFlatList = ({
  minute,
  limitMinute,
  onMinuteChange,
}: MinuteFlatListProps) => {
  const NUMBER_OF_MINUTES = limitMinute ?? 60;
  const minutes = Array.from(
    { length: NUMBER_OF_MINUTES },
    (_, index) => index
  );

  const flatListRef = useRef<FlatList<number>>(null);

  const handleChangeMinute = (item: number) => {
    onMinuteChange(item);

    flatListRef.current?.scrollToIndex({
      index: item,
      animated: true,
      viewPosition: 0.5,
    });
  };

  const handleScrollToIndexFailed = ({ index }: { index: number }) => {
    setTimeout(
      () =>
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        }),
      300
    );
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: minute,
      animated: true,
      viewPosition: 0.5,
    });
  }, [minute]);

  return (
    <>
      <FlatList
        data={minutes}
        ref={flatListRef}
        contentContainerStyle={styles.timeSelectContent}
        renderItem={renderItem(handleChangeMinute, minute)}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        initialNumToRender={limitMinute}
        onScrollToIndexFailed={handleScrollToIndexFailed}
      />
    </>
  );
};

const renderItem: renderItemType =
  (onChangeItem, selectedHour) =>
  ({ item }) => {
    const handleChangeHour = () => {
      onChangeItem(item);
    };

    return (
      <TimePickerPressable
        isSelectedHour={selectedHour === item}
        onPress={handleChangeHour}
      >
        <TimePickerText isSelectedHour={selectedHour === item}>
          {String(item).padStart(2, "0")}
        </TimePickerText>
      </TimePickerPressable>
    );
  };

const keyExtractor = (item: number) => String(item);
