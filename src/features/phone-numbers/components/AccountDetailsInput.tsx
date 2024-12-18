import React from 'react';
import { RefreshCw } from 'lucide-react';
import RequiredFieldIndicator from '../../../components/common/RequiredFieldIndicator';
import { generateCredentials } from '../utils/generation';

interface AccountDetailsInputProps {
  accountSid: string;
  authToken: string;
  onAccountSidChange: (value: string) => void;
  onAuthTokenChange: (value: string) => void;
}

const AccountDetailsInput = ({
  accountSid,
  authToken,
  onAccountSidChange,
  onAuthTokenChange
}: AccountDetailsInputProps) => {
  const { generateAccountSid, generateAuthToken } = generateCredentials();

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Account SID
          <RequiredFieldIndicator />
        </span>
        <div className="mt-1 relative">
          <input
            type="text"
            className="block w-full font-mono pr-10"
            placeholder="Enter Account SID..."
            value={accountSid}
            onChange={(e) => onAccountSidChange(e.target.value)}
          />
          <button
            type="button"
            onClick={() => onAccountSidChange(generateAccountSid())}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            title="Generate Random ID"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Auth Token
          <RequiredFieldIndicator />
        </span>
        <div className="mt-1 relative">
          <input
            type="text"
            className="block w-full font-mono pr-10"
            placeholder="Enter Auth Token..."
            value={authToken}
            onChange={(e) => onAuthTokenChange(e.target.value)}
          />
          <button
            type="button"
            onClick={() => onAuthTokenChange(generateAuthToken())}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            title="Generate Random Token"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </label>
    </div>
  );
};

export default AccountDetailsInput;