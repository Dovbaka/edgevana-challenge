'use client'
import {AccountTypeSelector, Button, CarouselContainer, LinkComponent} from "@/components";
import { UserIcon, BriefcaseIcon } from '@/helpers/images'
import {useState} from "react";
import {useRouter } from 'next/navigation';
import {SignUpLayout} from "@/components/UI/SignUpLayout/SignUpLayout";
import {AccountType} from "@/types";

const SignUp = () => {
  const [accountType, setAccountType] = useState<AccountType | undefined>();
  const router = useRouter()

  return (
    <SignUpLayout
      leftContent={(
        <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)] relative">
          <div>
            <h2 className="text-primary font-bold text-title">Welcome to Edgevana</h2>
            <p className="text-base-s mt-3">Choose your account type to get started</p>
            <div className="mt-10 flex flex-col gap-y-5">
              <AccountTypeSelector
                activeType={accountType}
                icon={UserIcon}
                title={AccountType.INDIVIDUAL}
                onClick={setAccountType}
                description="For individuals who want to participate, develop or build with a click of a button."
              />
              <AccountTypeSelector
                activeType={accountType}
                icon={BriefcaseIcon}
                title={AccountType.BUSINESS}
                onClick={setAccountType}
                description="For companies and institutions who need access to our suite of tools and real-time insights to manage and run their operations."
              />
            </div>
            <Button
              className="pt-4 pb-4"
              disabled={!accountType}
              onClick={() => router.push(`/sign-up/register?accountType=${accountType}`)}
            >
              Get Started
            </Button>
            <p className="font-medium text-base-s mt-10 text-center">
              {`Already have an account? `}
              <LinkComponent href="/">Sign in</LinkComponent>
            </p>
          </div>
        </div>
      )}
      rightContent={(<CarouselContainer/>)}
    />
  )
}

export default SignUp
