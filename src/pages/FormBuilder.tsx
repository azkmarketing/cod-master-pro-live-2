import React, { useState } from 'react';
import {
  Plus,
  Eye,
  Save,
  Copy,
  Trash2,
  GripVertical,
  Type,
  Mail,
  Phone,
  MapPin,
  ListOrdered,
  CheckSquare,
  Calendar,
  Hash,
  Settings as SettingsIcon
} from 'lucide-react';

const FormBuilder = () => {
  const [formName, setFormName] = useState('New COD Form');
  const [showPreview, setShowPreview] = useState(false);
  const [formFields, setFormFields] = useState([
    { id: '1', type: 'text', label: 'Full Name', required: true, placeholder: 'Enter your full name' },
    { id: '2', type: 'phone', label: 'Phone Number', required: true, placeholder: '+966 5X XXX XXXX' },
    { id: '3', type: 'email', label: 'Email Address', required: false, placeholder: 'your@email.com' },
    { id: '4', type: 'address', label: 'Delivery Address', required: true, placeholder: 'Street, Building, Apartment' },
  ]);

  const fieldTypes = [
    { type: 'text', label: 'Text Input', icon: Type },
    { type: 'email', label: 'Email', icon: Mail },
    { type: 'phone', label: 'Phone', icon: Phone },
    { type: 'address', label: 'Address', icon: MapPin },
    { type: 'number', label: 'Number', icon: Hash },
    { type: 'select', label: 'Dropdown', icon: ListOrdered },
    { type: 'checkbox', label: 'Checkbox', icon: CheckSquare },
    { type: 'date', label: 'Date', icon: Calendar },
  ];

  const addField = (type: string) => {
    const newField = {
      id: Date.now().toString(),
      type,
      label: `New ${type} field`,
      required: false,
      placeholder: '',
    };
    setFormFields([...formFields, newField]);
  };

  const removeField = (id: string) => {
    setFormFields(formFields.filter(field => field.id !== id));
  };

  const updateField = (id: string, updates: any) => {
    setFormFields(formFields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const renderFieldPreview = (field: any) => {
    const commonClasses = "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent";
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'number':
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            className={commonClasses}
            required={field.required}
          />
        );
      case 'address':
        return (
          <textarea
            placeholder={field.placeholder}
            rows={3}
            className={commonClasses}
            required={field.required}
          />
        );
      case 'select':
        return (
          <select className={commonClasses} required={field.required}>
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        );
      case 'checkbox':
        return (
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
            <span className="text-gray-700">{field.placeholder || 'Checkbox option'}</span>
          </label>
        );
      case 'date':
        return (
          <input
            type="date"
            className={commonClasses}
            required={field.required}
          />
        );
      default:
        return <input type="text" className={commonClasses} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Form Builder</h1>
          <p className="text-gray-600 mt-1">Design beautiful COD forms that convert</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
          >
            <Eye size={18} />
            <span>{showPreview ? 'Edit' : 'Preview'}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-medium shadow-lg">
            <Save size={18} />
            <span>Save Form</span>
          </button>
        </div>
      </div>

      {/* Form Name */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Form Name</label>
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-medium"
          placeholder="Enter form name"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Field Types Palette */}
        {!showPreview && (
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Field Types</h2>
            <div className="space-y-2">
              {fieldTypes.map((fieldType) => {
                const Icon = fieldType.icon;
                return (
                  <button
                    key={fieldType.type}
                    onClick={() => addField(fieldType.type)}
                    className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-50 hover:bg-indigo-50 border-2 border-gray-200 hover:border-indigo-300 rounded-xl transition-all group"
                  >
                    <Icon className="text-gray-600 group-hover:text-indigo-600" size={18} />
                    <span className="text-gray-700 group-hover:text-indigo-700 font-medium">{fieldType.label}</span>
                    <Plus className="ml-auto text-gray-400 group-hover:text-indigo-600" size={16} />
                  </button>
                );
              })}
            </div>

            {/* Form Settings */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <SettingsIcon size={16} className="mr-2" />
                Form Settings
              </h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Enable reCAPTCHA</span>
                  <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Collect Phone OTP</span>
                  <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" defaultChecked />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Show Product Images</span>
                  <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" defaultChecked />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Auto-calculate Total</span>
                  <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" defaultChecked />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Form Builder / Preview */}
        <div className={showPreview ? 'lg:col-span-3' : 'lg:col-span-2'}>
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            {showPreview ? (
              /* Preview Mode */
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{formName}</h2>
                  <p className="text-gray-600">Fill out the form below to complete your order</p>
                </div>

                {/* Product Summary */}
                <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">LUBAN Gift Bundle</h3>
                      <p className="text-sm text-gray-600">Premium Frankincense Oil + Tallow Cream</p>
                      <p className="text-2xl font-bold text-indigo-600 mt-2">$127.50</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {formFields.map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {renderFieldPreview(field)}
                    </div>
                  ))}

                  <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-shadow">
                    Place Order - Cash on Delivery
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    🔒 Secure checkout • Pay when you receive • Free returns
                  </p>
                </div>
              </div>
            ) : (
              /* Edit Mode */
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Form Fields ({formFields.length})</h2>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    Clear All
                  </button>
                </div>

                {formFields.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="text-gray-400" size={32} />
                    </div>
                    <p className="text-gray-600 font-medium mb-2">No fields yet</p>
                    <p className="text-sm text-gray-500">Add fields from the left panel to get started</p>
                  </div>
                ) : (
                  formFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="group p-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-xl transition-all"
                    >
                      <div className="flex items-start space-x-4">
                        <button className="mt-1 text-gray-400 hover:text-gray-600 cursor-move">
                          <GripVertical size={20} />
                        </button>
                        
                        <div className="flex-1 space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1">Field Label</label>
                              <input
                                type="text"
                                value={field.label}
                                onChange={(e) => updateField(field.id, { label: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-gray-600 mb-1">Placeholder</label>
                              <input
                                type="text"
                                value={field.placeholder}
                                onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              />
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={field.required}
                                onChange={(e) => updateField(field.id, { required: e.target.checked })}
                                className="w-4 h-4 text-indigo-600 rounded"
                              />
                              <span className="text-sm text-gray-700">Required field</span>
                            </label>
                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                              {field.type}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <button
                            onClick={() => {
                              const duplicate = { ...field, id: Date.now().toString() };
                              setFormFields([...formFields, duplicate]);
                            }}
                            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"
                          >
                            <Copy size={18} />
                          </button>
                          <button
                            onClick={() => removeField(field.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Form Embed Code */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Embed Code</h2>
        <div className="bg-gray-900 rounded-xl p-4">
          <code className="text-green-400 text-sm font-mono">
            {`<div id="cod-form-${formName.toLowerCase().replace(/\s+/g, '-')}"></div>\n<script src="https://app.codmaster.com/embed.js" data-form="form-123"></script>`}
          </code>
        </div>
        <button className="mt-3 flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
          <Copy size={16} />
          <span>Copy Code</span>
        </button>
      </div>
    </div>
  );
};

export default FormBuilder;
