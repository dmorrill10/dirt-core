module Dirt
# Common class for all model objects within the system.
  module ModelBehaviour
    def self.included(klass)
      klass.extend ClassMethods
    end

    module ClassMethods
      # Initializes a new instance of the class. The parameter hash takes whatever properties of the
      # specific model type as keys.
      def new(*args)
        obj = nil
        begin
          obj = super
        rescue ArgumentError
          obj = super()
        end
        obj.update(args[0]) if args[0].is_a? Hash
        obj
      end
    end

    # Updates the properties of this instance. The parameter hash takes whatever properties of the
    # specific model type as keys.
    def update(params)
      params.keys.each do |key|
        self.send("#{key}=", params[key])
      end
    end

    # The hash representation of any model object maps attribute names as symbols to their values, like the following:
    #   {attr1: val1, attr2: val2, ...}
    def to_hash
      instance_variables.each_with_object({}) do |var, hash|
        hash[var[1..-1].to_sym] = instance_variable_get(var)
      end
    end

    def ==(other)
      return instance_variables.all? do |var|
        instance_variable_get(var) == other.instance_variable_get(var)
      end

      false
    end
  end
end