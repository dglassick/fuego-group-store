import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react';
import { AddIcon, CalendarIcon, InfoOutlineIcon, MinusIcon } from '@chakra-ui/icons';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { GoLocation } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import { assets } from '../../constants/assets';
import { MouseEvent, useState } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Purchase: NextPage = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0
  });

  const [cart, setCart] = useState({});
  const [generalAdmission, setGeneralAdmission] = useState({
    label: 'Group Admission',
    cost: 13,
    quantity: 0
  });
  const [cardNumber, setCardNumber] = useState<string>();
  const [cardExpirationDate, setCardExpirationDate] = useState<string>();
  const [cardName, setCardName] = useState<string>();
  const [cardCvc, setCardCvc] = useState<string>();

  const handleMinusClick = (label: string) => {
    if (label === generalAdmission.label) {
      setGeneralAdmission({
        ...generalAdmission,
        quantity: generalAdmission.quantity - 1
      });
    }
  };

  const handlePlusClick = (label: string) => {
    if (label === generalAdmission.label) {
      setGeneralAdmission({
        ...generalAdmission,
        quantity: generalAdmission.quantity + 1
      });
    }
  };
  const handleAddToCart = (quantity: number) => {
    console.log(cart);
    setCart({
      ...generalAdmission,
      quantity
    });
  };

  const steps = [
    {
      label: 'Choose',
      description: 'Choose',
      content: (
        <Box display={'flex'} width={'100%'}>
          <Stack
            p='4'
            boxShadow='lg'
            m='4'
            borderRadius='md'
            color={'#fff'}
            backgroundColor={'#a7122a'}
            width={'100%'}
          >
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent='space-between'>
              <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
                Group Admission{' '}
                {
                  <Link href={'/info/'} passHref>
                    <InfoOutlineIcon />
                  </Link>
                }
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                <IconButton
                  colorScheme={'whiteAlpha'}
                  aria-label='Search database'
                  icon={<MinusIcon />}
                  size={'sm'}
                  disabled={generalAdmission.quantity === 0}
                  onClick={() => handleMinusClick(generalAdmission.label)}
                />
                <Text color={'white'}>{generalAdmission.quantity}</Text>
                <IconButton
                  colorScheme={'whiteAlpha'}
                  aria-label='Search database'
                  icon={<AddIcon />}
                  size={'sm'}
                  onClick={() => handlePlusClick(generalAdmission.label)}
                />
              </Stack>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              justifyContent='space-between'
              alignItems={'center'}
            >
              <Text fontSize={{ base: 'sm' }} textAlign={'left'}>
                ${generalAdmission.cost}.00
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
                <Box
                  as='button'
                  height='30px'
                  lineHeight='1.2'
                  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                  px='8px'
                  borderRadius='5px'
                  fontSize='14px'
                  fontWeight='semibold'
                  bg='black'
                  borderColor='#ccd0d5'
                  color='white'
                  _hover={{ bg: '#ebedf0', color: 'black' }}
                  _active={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9'
                  }}
                  _focus={{
                    boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
                  }}
                  onClick={() => handleAddToCart(generalAdmission.quantity)}
                >
                  Add to Cart
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      )
    },
    {
      label: 'Payment',
      description: 'Payment',
      content: (
        <Stack width={'100%'} py={12} px={6}>
          <Stack spacing={4}>
            <FormLabel>Payment Information</FormLabel>
            <HStack>
              <Box>
                <FormControl id='creditCardNumber' isRequired>
                  <FormLabel>Credit Card Number</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='expirationDate' isRequired>
                  <FormLabel>Expiration Date</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='cvcNumber' isRequired>
                  <FormLabel>CVC Number</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='zipCode' isRequired>
                  <FormLabel>ZIP Code</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='cardName' isRequired>
                  <FormLabel>Name on Card</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
          </Stack>
          <Stack spacing={4}>
            <FormLabel>Billing Information</FormLabel>
            <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='lastName' isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='email' isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='phoneNumber' isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
          </Stack>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='address' isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='addressUnit'>
                  <FormLabel>Unit</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='city' isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='state' isRequired>
                  <FormLabel>State</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='billingZipCode' isRequired>
                  <FormLabel>ZIP Code</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
          </Stack>
        </Stack>
      )
    },
    {
      label: 'Share',
      description: 'Payment',
      content: (
        <Box display={'flex'} width={'100%'}>
          <Stack p='4' boxShadow='lg' m='4' borderRadius='md' width={'100%'}>
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent='space-between'>
              <Box display={'flex'} flexDirection={'column'} alignContent={'center'} alignItems='center'>
                <Heading fontSize={'3xl'} p={3}>Thank you for your purchase! Share your upcoming event!</Heading>
                <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} alignContent={'center'}>
                  {/* Facebook */}
                  <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                    <Center>
                      <Text>Share on Facebook</Text>
                    </Center>
                  </Button>
                  {/* LinkedIn */}
                  <Button w={'full'} colorScheme={'messenger'} leftIcon={<FaTwitter />}>
                    <Center>
                      <Text>Share on Twitter</Text>
                    </Center>
                  </Button>

                  {/* Messenger */}
                  <Button w={'full'} variant={'outline'} leftIcon={<FaInstagram />}>
                    <Center>
                      <Text>Share on Instagram</Text>
                    </Center>
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      )
    }
  ];

  return (
    <Box className={styles.container}>
      <Head>
        <title>Fuego Invite Page 🔥</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        width={'100%'}
        display='flex'
        flexDirection={'column'}
        justifyContent='center'
        alignContent={'center'}
      >
        <Box
          style={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box className={styles.imageBox}>
            <Box
              style={{
                position: 'absolute',
                bottom: '120px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}
            >
              <Text
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: '#fffff',
                  textShadow: '2px 2px 4px #000000'
                }}
                className={styles.matchTitle}
              >
                CV Fuego vs Oakland Roots
              </Text>
              <Text
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#fffff',
                  textShadow: '2px 2px 4px #000000'
                }}
              >
                <span style={{ padding: '5px' }}>
                  <CalendarIcon />
                </span>
                {assets.matchDate}
              </Text>
              <Text
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#fffff',
                  textShadow: '2px 2px 4px #000000',
                  display: 'inline-flex'
                }}
              >
                <span style={{ padding: '5px' }}>
                  <GoLocation />
                </span>
                {assets.matchDate}
              </Text>
            </Box>
          </Box>

          <Box
            style={{
              borderRadius: '15px',
              backgroundColor: 'white',
              position: 'absolute',
              top: '200px',
              width: '100%',
              padding: '0',
              paddingTop: '15px',
              background: '#FFFFFF'
            }}
          >
            <Flex flexDir='column' width='100%' alignItems={'center'} justifyContent={'center'}>
              <Steps colorScheme={'red'} activeStep={activeStep} padding='10px'>
                {steps.map(({ label, content, description }) => (
                  <Step label={label} key={label}>
                    <Box width={'100%'} bg={'#FAFAFA'} height={'2px'}></Box>
                    {content}
                  </Step>
                ))}
              </Steps>
              <Box width={'100%'} height={'2px'} bg={'#FAFAFA'}></Box>
              <Box width={'100%'} bg={'#FAFAFA'} borderRadius={'0px 0px 15px 15px'}>
                {activeStep === steps.length ? (
                  <Flex p={3}>
                    <Button mx='auto' size='sm' onClick={reset} px={'5px'}>
                      Reset
                    </Button>
                  </Flex>
                ) : (
                  <Flex width='95%' justifyContent='space-between' alignItems={'center'}>
                    <Box p={3}>
                      {steps[activeStep].label === 'Choose' ? (
                        <IconButton
                          style={{ position: 'relative' }}
                          colorScheme={'gray'}
                          bg={'#FAFAFA'}
                          aria-label={'Notifications'}
                          size={'lg'}
                          icon={
                            <>
                              <FiShoppingCart color={'gray.750'} />
                              <Box
                                as={'span'}
                                color={'white'}
                                position={'absolute'}
                                top={'6px'}
                                right={'7px'}
                                fontSize={'10px'}
                                bgColor={'red'}
                                borderRadius={'100%'}
                                zIndex={9999}
                                width={'15px'}
                                p={'1px'}
                              >
                                {generalAdmission.quantity}
                              </Box>
                            </>
                          }
                        />
                      ) : steps[activeStep].label === 'Payment' ? (
                        <Box p={4}>
                          <Text>
                            Total: ${generalAdmission.cost * generalAdmission.quantity}.00
                          </Text>
                        </Box>
                      ) : (
                        ''
                      )}
                    </Box>
                    <Box p={4} marginRight={'-4'}>
                      <Button
                        isDisabled={activeStep === 0}
                        onClick={prevStep}
                        size='sm'
                        variant='ghost'
                        marginRight={'10px'}
                      >
                        Prev
                      </Button>
                      <button
                        onClick={
                          activeStep === steps.length - 1 ? e => console.log(e.target) : nextStep
                        }
                        className={styles.buttonLong}
                        style={{ textAlign: 'center', width: '150px' }}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Checkout'}
                      </button>
                    </Box>
                  </Flex>
                )}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Purchase;
