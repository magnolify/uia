import OrderInput from '../OrderInput';
import { SAMPLE_ORDER } from '@/lib/constants';

export default function OrderInputExample() {
  const handleGenerate = (order: any) => {
    console.log("Generated for order:", order);
  };

  return (
    <div className="h-[600px] border rounded-lg overflow-hidden">
      <OrderInput 
        onGenerate={handleGenerate} 
        initialValue={JSON.stringify(SAMPLE_ORDER, null, 2)}
      />
    </div>
  );
}
