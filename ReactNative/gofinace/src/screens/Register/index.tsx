import React, { useState } from 'react';
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

export function Register() {
  const [transactionsType, setTransactionsType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  const {
    control,
    handleSubmit,
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
  function handleRegister(form: FormData) {
    if (!transactionsType) {
      return Alert.alert('Selecione o tipo de transação');
    }
    if (category.key === 'category') {
      return Alert.alert('Selecione o tipo de transação');
    }
    console.log(form)
    const teste = {
      name: form.name,
      amount: form.amount,
      transactionsType,
      category: category.key,
    };
    console.log(teste);
  }
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
            onPress={handleSubmit((data)=> handleRegister(data as FormData)) }
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