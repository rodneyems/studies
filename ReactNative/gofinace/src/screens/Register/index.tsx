import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Button } from '../../componets/Form/Button';
import { CategorySelectButton } from '../../componets/Form/CategorySelectButton';
import { InputControlled } from '../../componets/Form/InputControlled';
import { TransactionTypeButton } from '../../componets/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('Informe um valor positivo')
    .required('Valor é obrigatório'),
});

interface FormData {
  name: string;
  amount: Number;
}
const dataKey = '@gofinace:transactions';
export function Register() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [transactionsType, setTransactionsType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function handleTransactionsType(transactionType: 'up' | 'down') {
    setTransactionsType(transactionType);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }
  async function handleRegister(form: FormData) {
    if (!transactionsType) {
      return Alert.alert('Selecione o tipo de transação');
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione o tipo de transação');
    }
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionsType,
      categoryName: category.key,
      date: new Date(),
    };
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setTransactionsType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });
      reset();
      navigation.navigate('Listagem')
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar os dados');
    }
  }
  useEffect(() => {
    async function logData() {
      const data = await AsyncStorage.getItem(dataKey);
      console.log(JSON.parse(data!));
    }

    logData();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputControlled
              name='name'
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputControlled
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />
            <TransactionsTypes>
              <TransactionTypeButton
                type='up'
                title='Income'
                isActive={transactionsType === 'up' ? true : false}
                onPress={() => handleTransactionsType('up')}
              />
              <TransactionTypeButton
                type='down'
                title='Outcome'
                isActive={transactionsType === 'down' ? true : false}
                onPress={() => handleTransactionsType('down')}
              />
            </TransactionsTypes>
            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            ></CategorySelectButton>
          </Fields>

          <Button
            onPress={handleSubmit((data) => handleRegister(data as FormData))}
            title='Confirmar'
          ></Button>
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            closeSelectCategory={handleCloseSelectCategoryModal}
            setCategory={setCategory}
          ></CategorySelect>
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
