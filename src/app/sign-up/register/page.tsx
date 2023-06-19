'use client'
import Image from "next/image";
import {LinkComponent, RegisterForm} from "@/components";
import {SignUpLayout} from "@/components/UI/SignUpLayout/SignUpLayout";
import { Incentives, Mobile} from '@/helpers/images'
import {useSearchParams} from "next/navigation";
import {AccountType} from "@/types";

const Register = () => {
  const params = useSearchParams();
  const accountType = params.get('accountType');

  return (
    <SignUpLayout
      leftContent={(
        <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] relative">
          <div className="text-left w-full">
            <h2 className="text-primary font-bold text-[26px]">Sign Up</h2>
            <p className="text-[15px] mt-3">Create your account</p>
          </div>
          <RegisterForm />
          <p className="font-medium text-base-s mt-2 text-center">
            <LinkComponent href="/">Sign up</LinkComponent>
            {` for ${(accountType === AccountType.INDIVIDUAL ? AccountType.BUSINESS : AccountType.INDIVIDUAL).toLowerCase()} account`}
          </p>
        </div>
      )}
      rightContent={(
        <div className="flex justify-center items-center py-24 h-full">
          <div className="text-center px-4">
            <h2 className="text-primary text-[42px]/[56px] font-bold md:whitespace-pre">
              {`Earn free crypto\nafter making your first purchase.`}
            </h2>
            <p className="font-medium text-base-s mt-2 text-center">
              *The average Edgevana operator earns $950 a month in incentives.{' '}
              <LinkComponent href="/">
                See terms
              </LinkComponent>
            </p>
            <div className="mt-14 flex justify-center">
              <div className="relative w-[70%] bg-white p-4 rounded-3xl">
                <Image src={Incentives} alt="general info" />

                <div className="absolute w-[30%] -bottom-12 -left-12">
                  <div className="relative bg-white p-2 rounded-3xl">
                    <Image src={Mobile} alt="chats" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default Register
