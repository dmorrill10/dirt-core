var search_data = {"index":{"searchIndex":["blockvalidator","existencevalidator","foobar","herpzerp","derpgerp","foobar","persister","persisting","presencevalidator","role","scheduler","selfexistencevalidator","testpersister","validating","==()","all()","children_of()","class()","clear()","delete()","delete()","error_message()","error_message()","error_message()","error_message()","errors()","exists?()","for()","load()","load()","method_missing()","new()","new()","new()","new()","new()","new()","new()","respond_to?()","save()","save()","valid?()","valid?()","valid?()","valid?()","valid?()","gemfile","readme"],"longSearchIndex":["blockvalidator","existencevalidator","foobar","herpzerp","herpzerp::derpgerp","herpzerp::derpgerp::foobar","persister","persisting","presencevalidator","role","scheduler","selfexistencevalidator","testpersister","validating","persisting#==()","testpersister#all()","testpersister#children_of()","role#class()","persister::clear()","persisting#delete()","testpersister#delete()","blockvalidator#error_message()","existencevalidator#error_message()","presencevalidator#error_message()","selfexistencevalidator#error_message()","validating#errors()","testpersister#exists?()","persister::for()","persisting#load()","testpersister#load()","role#method_missing()","blockvalidator::new()","existencevalidator::new()","presencevalidator::new()","role::new()","selfexistencevalidator::new()","testpersister::new()","validating::new()","role#respond_to?()","persisting#save()","testpersister#save()","blockvalidator#valid?()","existencevalidator#valid?()","presencevalidator#valid?()","selfexistencevalidator#valid?()","validating#valid?()","",""],"info":[["BlockValidator","","BlockValidator.html","","<p>Takes a block, and uses it to determine validity,\n"],["ExistenceValidator","","ExistenceValidator.html","","<p>Tests for whether the property referenced by an id is saved in the\nappropriate persister.\n<p>For more about …\n"],["FooBar","","FooBar.html","",""],["HerpZerp","","HerpZerp.html","",""],["HerpZerp::DerpGerp","","HerpZerp/DerpGerp.html","",""],["HerpZerp::DerpGerp::FooBar","","HerpZerp/DerpGerp/FooBar.html","",""],["Persister","","Persister.html","","<p>This Persister registry is the source for all persisters in the system.\nRegister persisters here with …\n"],["Persisting","","Persisting.html","","<p>Role for adding persistability to model objects.\n"],["PresenceValidator","","PresenceValidator.html","","<p>Tests whether the given property is set (ie non-nil)\n<p>For more about validation, see Validating\n"],["Role","","Role.html","","<p>Roles are part of the DCI system design paradigm. They decorate a model\nobject to extend its behaviour …\n"],["Scheduler","","Scheduler.html","",""],["SelfExistenceValidator","","SelfExistenceValidator.html","","<p>Tests for the existence of the given id in the persister.\n<p>For more about validation, see Validating\n"],["TestPersister","","TestPersister.html","","<p>An in-memory implementation of persistence.\n"],["Validating","","Validating.html","","<p>A Role for testing whether the wrapped object is valid, using the list of\nvalidators provided in the …\n"],["==","Persisting","Persisting.html#method-i-3D-3D","(other)",""],["all","TestPersister","TestPersister.html#method-i-all","()","<p>Returns the list of all records.\n"],["children_of","TestPersister","TestPersister.html#method-i-children_of","(record)",""],["class","Role","Role.html#method-i-class","()",""],["clear","Persister","Persister.html#method-c-clear","()","<p>Forgets about all previously saved persisters.\n"],["delete","Persisting","Persisting.html#method-i-delete","(id)","<p>Removes the decorated object from the appropriate persister.\n"],["delete","TestPersister","TestPersister.html#method-i-delete","(id)","<p>Removes the record with the given id.\n"],["error_message","BlockValidator","BlockValidator.html#method-i-error_message","(validated)",""],["error_message","ExistenceValidator","ExistenceValidator.html#method-i-error_message","(validated)",""],["error_message","PresenceValidator","PresenceValidator.html#method-i-error_message","(validated)",""],["error_message","SelfExistenceValidator","SelfExistenceValidator.html#method-i-error_message","(validated)",""],["errors","Validating","Validating.html#method-i-errors","()","<p>Returns a list of the string messages returned from the validators that\nhave failed.\n"],["exists?","TestPersister","TestPersister.html#method-i-exists-3F","(id)","<p>determines whether a record exists with the given id\n"],["for","Persister","Persister.html#method-c-for","(klass, persister=nil)","<p>If persister is supplied, then this sets the persister for the given class,\notherwise it returns the …\n"],["load","Persisting","Persisting.html#method-i-load","(id)","<p>Retrieves the decorated object from the appropriate persister.\n"],["load","TestPersister","TestPersister.html#method-i-load","(id)","<p>Returns the record with the given id.\n"],["method_missing","Role","Role.html#method-i-method_missing","(method, *args, &block)","<p>Attempts to run the missing method on the decorated object before exploding\nas normal, with a light tingling …\n"],["new","BlockValidator","BlockValidator.html#method-c-new","(block, message_block)",""],["new","ExistenceValidator","ExistenceValidator.html#method-c-new","(property, opts)","<p>Takes the symbol name of the property to validate, and an options hash.\n<p>Options include:\n<p><p>as &mdash; The class of …\n"],["new","PresenceValidator","PresenceValidator.html#method-c-new","(property)","<p>Takes the property name as symbol\n"],["new","Role","Role.html#method-c-new","(decorated)","<p>Takes the decorated object.\n"],["new","SelfExistenceValidator","SelfExistenceValidator.html#method-c-new","(type, id)",""],["new","TestPersister","TestPersister.html#method-c-new","()",""],["new","Validating","Validating.html#method-c-new","(decorated, validators)","<p>Takes the decorated object and then the list of validators. See Role for\nmore on decoration.\n"],["respond_to?","Role","Role.html#method-i-respond_to-3F","(method, privates = false)",""],["save","Persisting","Persisting.html#method-i-save","(id=nil)","<p>Saves the decorated object with the appropriate persister.\n"],["save","TestPersister","TestPersister.html#method-i-save","(data, id=nil)","<p>Saves the record to the array either under the given id, or a new one if\nnone is provided,\n"],["valid?","BlockValidator","BlockValidator.html#method-i-valid-3F","(valdated)",""],["valid?","ExistenceValidator","ExistenceValidator.html#method-i-valid-3F","(validated)",""],["valid?","PresenceValidator","PresenceValidator.html#method-i-valid-3F","(validated)",""],["valid?","SelfExistenceValidator","SelfExistenceValidator.html#method-i-valid-3F","(validated)","<p><code>true</code> if the validated object exists in the persister.\n"],["valid?","Validating","Validating.html#method-i-valid-3F","()","<p>Returns <code>true</code> <em>iff</em> every validator passes.\n"],["Gemfile","","Gemfile.html","","<p>source ‘rubygems.org’\n<p>gem ‘simplecov’, group: :development gem “rspec”, group: :test gem “ …\n"],["README","","README.html","","<p>DIRT DCI Implementation in Ruby by Tenjin # # # = Dirt # Dirt (DCI\nImplemented in Ruby by Tenjin) is …\n"]]}}